using PT.Services.Administration.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace PT.Services.Administration
{
    public interface IAdministrationService
    {
        string getToken(string username, string password);

        UserViewModel getUser(string token);
    }
}
