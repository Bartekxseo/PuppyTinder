using PT.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace PT.DataAccess.EntityConfiguration
{
    class UserConfiguration : EntityTypeConfiguration<User>
    {
        public UserConfiguration()
        {
            HasKey(x => x.Id);
            Property(x => x.Username).IsRequired();
            Property(x => x.PasswordHash).IsRequired();
            Property(x => x.Token).IsRequired();
            Property(x => x.UserType).IsRequired();
            HasOptional(x => x.Shelter).WithMany().HasForeignKey(x => x.ShelterId);
            HasOptional(x => x.Preference).WithMany().HasForeignKey(x => x.PreferenceId);

        }
    }
}
