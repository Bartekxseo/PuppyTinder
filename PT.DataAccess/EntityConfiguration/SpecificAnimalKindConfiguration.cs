using PT.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace PT.DataAccess.EntityConfiguration
{
    public class SpecificAnimalKindConfiguration :EntityTypeConfiguration<SpecificAnimalKind>
    {
        public SpecificAnimalKindConfiguration()
        {
            HasKey(x => x.Id);
            HasRequired(x => x.AnimalKind).WithMany().HasForeignKey(x => x.AnimalKindId);
            Property(x => x.Kind).IsRequired();
            HasMany(x => x.Preferences).WithMany(x => x.SpecificAnimalKinds);
        }

    }
}
