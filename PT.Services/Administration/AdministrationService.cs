using AutoMapper;
using PT.DataAccess;
using PT.Domain.Entities;
using PT.Services.Administration.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PT.Services.Administration
{
    public class AdministrationService : IAdministrationService
    {
        private readonly PTDbContext ptDbContext;
        private readonly IMapper mapper;
        public AdministrationService(PTDbContext ptDbContext,
            IMapper mapper)
        {
            this.ptDbContext = ptDbContext;
            this.mapper = mapper;
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

    }
}
