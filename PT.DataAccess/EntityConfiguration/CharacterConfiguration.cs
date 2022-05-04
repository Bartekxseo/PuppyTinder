using PT.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace PT.DataAccess.EntityConfiguration
{
    class CharacterConfiguration : EntityTypeConfiguration<Character>
    {
        public CharacterConfiguration()
        {
            HasKey(x => x.Id);
            Property(x => x.Value).HasColumnName("CharacterName").IsRequired();
            HasMany(x => x.Animals).WithMany(x => x.Characters);
            HasMany(x => x.Preferences).WithMany(x => x.Characters);

        }
    }
}
