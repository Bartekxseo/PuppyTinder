using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NLog;
using PT.Services.User;
using PT.Services.User.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PT.RestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService userService;
        private static Logger logger = LogManager.GetCurrentClassLogger();
        public UserController(IUserService userService)
        {
            this.userService = userService;
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
    }
}
