using PT.Domain.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace PT.Domain.Entities
{
    public class Shelter : Entity<int>
    {
        public string Location { get; set; }
        public virtual ICollection<Animal> Animals { get; set; }
    }
}
