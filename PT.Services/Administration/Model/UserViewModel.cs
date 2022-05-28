using PT.Domain.Entities.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace PT.Services.Administration.Model
{
    public class UserViewModel
    {
        public int? Id { get; set; }
        public string Username { get; set; }

        public string Password { get; set; }

        public UserTypeEnum UserType { get; set; }

        public int? ShelterId { get; set; }

        public int? PreferencesId { get; set; }
    }
}
