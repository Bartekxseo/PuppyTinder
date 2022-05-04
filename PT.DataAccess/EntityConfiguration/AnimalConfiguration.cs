using PT.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace PT.DataAccess.EntityConfiguration
{
    public class AnimalConfiguration : EntityTypeConfiguration<Animal>
    {
        public AnimalConfiguration()
        {
            HasKey(x => x.Id);
            HasRequired(x => x.AnimalKind).WithMany().HasForeignKey(x => x.AnimalKindId);
            Property(x => x.Description).IsOptional().HasMaxLength(500);
            Property(x => x.Timeline).IsOptional().HasMaxLength(500);
            HasRequired(x => x.Color).WithMany().HasForeignKey(x => x.ColorId);
            HasRequired(x => x.PuppySize).WithMany().HasForeignKey(x => x.PuppySizeId);
            HasRequired(x => x.Shelter).WithMany().HasForeignKey(x => x.ShelterId);
            HasMany(x => x.Characters).WithMany(x => x.Animals);
            Property(x => x.Age).IsRequired();
            Property(x => x.MinYard).IsOptional();
            Property(x => x.MinLivingSpace).IsOptional();
            Property(x => x.Castrated).IsRequired();
            Property(x => x.LikesAnimals).IsRequired();
            Property(x => x.LikesKids).IsRequired();
            Property(x => x.Male).IsRequired();
            Property(x => x.CustomBoolean1).IsOptional();
            Property(x => x.CustomCharacter1).IsOptional();
            Property(x => x.CustomInteger1).IsOptional();
        }
    }
}
