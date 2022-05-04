using PT.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace PT.DataAccess.EntityConfiguration
{
    class AnimalKindConfiguration : EntityTypeConfiguration<AnimalKind>
    {
        public AnimalKindConfiguration()
        {
            HasKey(x => x.Id);
            Property(x => x.Value).HasColumnName("AnimalKindName").IsRequired();

        }
    }
}
