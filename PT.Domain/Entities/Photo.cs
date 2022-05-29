using PT.Domain.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace PT.Domain.Entities
{
    public class Photo : Entity<int>
    {
        public string Path { get; set; }

        public string FileName { get; set; }

        public int AnimalId { get; set; }

        public virtual Animal Animal { get; set; }

    }
}
