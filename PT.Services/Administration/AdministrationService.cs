using AutoMapper;
using PT.DataAccess;
using PT.Domain.Entities;
using PT.Domain.Services;
using PT.Services.Administration.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;

namespace PT.Services.Administration
{
    public class AdministrationService : IAdministrationService
    {
        private readonly PTDbContext ptDbContext;
        private readonly IMapper mapper;
        private readonly ITokenGeneratorService tokenGeneratorService;
        public AdministrationService(PTDbContext ptDbContext,
            IMapper mapper,
            ITokenGeneratorService tokenGeneratorService)
        {
            this.ptDbContext = ptDbContext;
            this.mapper = mapper;
            this.tokenGeneratorService = tokenGeneratorService;
        }

        public string getToken(string username, string password)
        {
            var user = ptDbContext.Set<User>().Where(x => x.Username == username || x.Email == username).FirstOrDefault();
            if (user != null)
            {
                if (password == Encoding.UTF8.GetString(Convert.FromBase64String(user.PasswordHash)))
                {
                    return user.Token;
                }
            }
            return "";
        }

        public UserViewModel getUser(string token)
        {
            var userViewModel = new UserViewModel();
            var user = ptDbContext.Set<User>().Where(x => x.Token == token).FirstOrDefault();
            mapper.Map(user, userViewModel);
            return userViewModel;
        }

        public void addOrUpdateUser(UserViewModel user)
        {
            var dbUser = user.Id.HasValue && user.Id.Value != 0 ? ptDbContext.Set<User>().SingleOrDefault(x => x.Id == user.Id) : new User();
            mapper.Map(user, dbUser);
            if(!(user.Id.HasValue && user.Id.Value!=0))
            {
                dbUser.Token = tokenGeneratorService.generateToken(20);
            }
            ptDbContext.Set<User>().AddOrUpdate(x=>x.Id,dbUser);
            ptDbContext.SaveChanges();
        }

    }
}
