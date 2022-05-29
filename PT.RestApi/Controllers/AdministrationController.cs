using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NLog;
using PT.DataAccess;
using PT.Domain.Entities;
using PT.Services.Administration;
using PT.Services.Administration.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PT.RestApi.Controllers
{
    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class AdministrationController : ControllerBase
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        private IAdministrationService administrationService;
        public AdministrationController(IAdministrationService administrationService)
        {
            this.administrationService = administrationService;
        }

        [HttpPost("getToken")]
        public string getToken(string username,string password)
        {
            try
            {
                return administrationService.getToken(username,password);
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("",ex);
            }
        }

        [HttpGet("getUser")]
        public UserViewModel getUser()
        {
            try
            {
                var requestAuth = Request.Headers.Where(x => x.Key == "Authorization").FirstOrDefault().Value.ToString().Trim();
                var token = requestAuth.Substring(requestAuth.IndexOf(" ")+1);
                return administrationService.getUser(token);
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("",ex);
            }
        }

        [HttpPost("addOrUpdateUser")]
        public void addOrUpdateUser(UserViewModel user)
        {
            try
            {
                administrationService.addOrUpdateUser(user);
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("",ex);
            }
        }
    }
}
