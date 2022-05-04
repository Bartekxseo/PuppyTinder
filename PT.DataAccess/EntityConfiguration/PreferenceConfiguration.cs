using PT.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace PT.DataAccess.EntityConfiguration
{
    class PreferenceConfiguration : EntityTypeConfiguration<Preference>
    {
        public PreferenceConfiguration()
        {
            HasKey(x => x.Id);
            Property(x => x.LivingSpaceSize).IsOptional();
            Property(x => x.YardSize).IsOptional();
            Property(x => x.OtherAnimals).IsRequired();
            Property(x => x.CatProtection).IsRequired();
            Property(x => x.Description).IsOptional().HasMaxLength(500);
            Property(x => x.Location).IsRequired();

            HasMany(x => x.PuppySizes).WithMany(x => x.Preferences);
            HasMany(x => x.SpecificAnimalKinds).WithMany(x => x.Preferences);
            HasMany(x => x.Characters).WithMany(x => x.Preferences);
            


        }
    }
}
