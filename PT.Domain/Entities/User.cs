using PT.Domain.Entities.Abstract;
using PT.Domain.Entities.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace PT.Domain.Entities
{
    public class User : Entity<int>
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string Token { get; set; }

        public UserTypeEnum UserType { get; set; }

        public int? ShelterId { get; set; }
        public virtual Shelter Shelter { get; set; }

        public int? PreferenceId { get; set; }
        public virtual Preference Preference { get; set; }
    }
}
