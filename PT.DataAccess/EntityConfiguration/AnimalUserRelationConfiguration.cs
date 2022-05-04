using PT.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace PT.DataAccess.EntityConfiguration
{
    class AnimalUserRelationConfiguration : EntityTypeConfiguration<AnimalUserRelation>
    {
        public AnimalUserRelationConfiguration()
        {
            HasKey(x => x.Id);
            Property(x => x.RelationType);

            HasRequired(x => x.Preference).WithMany().HasForeignKey(x => x.PreferenceId);

            HasRequired(x => x.Animal).WithMany().HasForeignKey(x => x.AnimalId);
        }
    }
}
