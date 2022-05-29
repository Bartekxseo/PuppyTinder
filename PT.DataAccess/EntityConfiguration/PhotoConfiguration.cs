using PT.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace PT.DataAccess.EntityConfiguration
{
    public class PhotoConfiguration : EntityTypeConfiguration<Photo>
    {
        public PhotoConfiguration()
        {
            HasKey(x => x.Id);
            Property(x => x.Path);
            Property(x => x.FileName);
            HasRequired(x => x.Animal).WithMany(x => x.Photos).HasForeignKey(x => x.AnimalId);
        }
    }
}
