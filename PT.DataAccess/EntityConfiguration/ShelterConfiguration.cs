using PT.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace PT.DataAccess.EntityConfiguration
{
    class ShelterConfiguration : EntityTypeConfiguration<Shelter>
    {
        public ShelterConfiguration()
        {
            HasKey(x => x.Id);
            Property(x => x.Location);
            HasMany(x => x.Animals);
            Property(x => x.Description).HasMaxLength(500);
        }
    }
}
