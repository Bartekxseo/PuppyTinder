using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NLog;
using PT.DataAccess;
using PT.Domain.Entities;
using PT.RestApi.JwtHelpers;
using PT.RestApi.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PT.RestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly PTDbContext ptDbContext;
        private readonly JwtSettings jwtSettings;
        private static Logger logger = LogManager.GetCurrentClassLogger();
        public LoginController(PTDbContext ptDbContext,JwtSettings jwtSettings)
        {
            this.ptDbContext = ptDbContext;
            this.jwtSettings = jwtSettings;
        }

        [HttpPost("login")]
        public string getToken(string username,string password)
        {
            try
            {
                var token = new UserTokens();
                var user = ptDbContext.Set<User>().SingleOrDefault(x => x.Username == username || x.Email == username);
                if(password == Encoding.UTF8.GetString(Convert.FromBase64String(user.PasswordHash)))
                {
                    token = JwtHelpers.JwtHelpers.GenTokenkey(new UserTokens()
                    {
                        EmailId = user.Email,
                        GuidId = Guid.NewGuid(),
                        UserName = user.Username,
                        Id = user.Id,
                    }, jwtSettings);
                    user.Token = token.Token;
                    ptDbContext.Set<User>().AddOrUpdate(user);
                    ptDbContext.SaveChanges();
                }
                else
                {
                    throw new UnauthorizedAccessException();
                }
                return token.Token;
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("",ex);
            }
        }
    }
}
