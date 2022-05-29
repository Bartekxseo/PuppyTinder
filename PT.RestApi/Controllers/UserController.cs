using Microsoft.AspNet.OData.Query;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NLog;
using PT.Domain.Entities;
using PT.Services.User;
using PT.Services.User.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PT.RestApi.Controllers
{
    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService userService;
        private static Logger logger = LogManager.GetCurrentClassLogger();
        public UserController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpGet("getShelter")]
        public ShelterViewModel getShelter(int shelterId)
        {
            try
            {
                return userService.getShelter(shelterId);
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }

        [HttpGet("getAnimal")]
        public AnimalViewModel getAnimal(int animalId)
        {
            try
            {
                return userService.getAnimal(animalId);
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("",ex);
            }
        }

        [HttpGet("getAnimals")]
        public List<AnimalViewModel> getAnimals(ODataQueryOptions<Animal> options)
        {
            try
            {
                return userService.getAnimals(options);
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }

        [HttpGet("likeAnimal")]
        public ActionResult likeAnimal(int animalId)
        {
            try
            {
                var requestAuth = Request.Headers.Where(x => x.Key == "Authorization").FirstOrDefault().Value.ToString().Trim();
                var token = requestAuth.Substring(requestAuth.IndexOf(" ") + 1);
                userService.likeAnimal(animalId,token);
                return Ok();
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }

        [HttpGet("dislikeAnimal")]
        public ActionResult dislikeAnimal(int animalId)
        {
            try
            {
                var requestAuth = Request.Headers.Where(x => x.Key == "Authorization").FirstOrDefault().Value.ToString().Trim();
                var token = requestAuth.Substring(requestAuth.IndexOf(" ") + 1);
                userService.dislikeAnimal(animalId, token);
                return Ok();
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }
        [HttpGet("getLikedAnimals")]
        public List<AnimalViewModel> getLikedAnimals()
        {
            try
            {
                var requestAuth = Request.Headers.Where(x => x.Key == "Authorization").FirstOrDefault().Value.ToString().Trim();
                var token = requestAuth.Substring(requestAuth.IndexOf(" ") + 1);
                return userService.getLikedAnimals(token);
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }
    }
}
