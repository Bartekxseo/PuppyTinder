using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NLog;
using PT.Services.Shelter;
using PT.Services.Shelter.Model;
using PT.Services.User.Model;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace PT.RestApi.Controllers
{
    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class ShelterController : ControllerBase
    {
        private readonly IShelterService shelterService;
        private static Logger logger = LogManager.GetCurrentClassLogger();
        public ShelterController(IShelterService shelterService)
        {
            this.shelterService = shelterService;
        }

        [HttpGet("getOwnAnimals")]
        public List<AnimalViewModel> getOwnAnimals()
        {
            try
            {
                var requestAuth = Request.Headers.Where(x => x.Key == "Authorization").FirstOrDefault().Value.ToString().Trim();
                var token = requestAuth.Substring(requestAuth.IndexOf(" ") + 1);
                return shelterService.getOwnAnimals(token);

            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("",ex);
            }
        }

        [HttpPost("addOrUpdateAnimal")]
        public ActionResult addOrUpdateAnimal(AnimalViewModel animalViewModel)
        {
            try
            {
                shelterService.addOrUpdateAnimal(animalViewModel);
                return Ok();

            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }

        [HttpDelete("deleteAnimal")]
        public ActionResult deleteAnimal(int animalId)
        {
            try
            {
                shelterService.deleteAnimal(animalId);
                return Ok();

            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }
        [HttpPost("uploadPhoto")]
        public ActionResult uploadPhoto(ImageViewModel photo)
        {
            try
            {
                Stream file = new MemoryStream(photo.Array);
                shelterService.uploadPhoto(file,photo);
                return Ok();

            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }

        [HttpDelete("deletePhoto")]
        public ActionResult deletePhoto(int photoId)
        {
            try
            {
                shelterService.deletePhoto(photoId);
                return Ok();

            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }

        [HttpPost("addOrUpdateShelter")]
        public ShelterViewModel addOrUpdateShelter(ShelterViewModel shelterViewModel)
        {
            try
            {
                return shelterService.updateShelter(shelterViewModel);

            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }
    }
}
