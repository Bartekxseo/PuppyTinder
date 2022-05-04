using PT.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace PT.DataAccess.EntityConfiguration
{
    class ColorConfiguration : EntityTypeConfiguration<Color>
    {
        public ColorConfiguration()
        {
            HasKey(x => x.Id);
            Property(x => x.Value).HasColumnName("ColorName").IsRequired();
            HasMany(x => x.Preferences).WithMany(x => x.Colors);
        }
    }
}
