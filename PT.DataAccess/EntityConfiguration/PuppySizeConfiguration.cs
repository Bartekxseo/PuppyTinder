using PT.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace PT.DataAccess.EntityConfiguration
{
    class PuppySizeConfiguration : EntityTypeConfiguration<PuppySize>
    {
        public PuppySizeConfiguration()
        {
            HasKey(x => x.Id);
            Property(x => x.Value).HasColumnName("PuppySizeName").IsRequired();
            HasMany(x => x.Preferences).WithMany(x => x.PuppySizes);

        }
    }
}
