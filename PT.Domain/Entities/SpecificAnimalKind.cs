using PT.Domain.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Text;
namespace PT.Domain.Entities
{
    public class SpecificAnimalKind : Entity<int>
    {
        public int AnimalKindId { get; set; }
        public virtual AnimalKind AnimalKind { get; set; }
        public string Kind { get; set; }

        public virtual ICollection<Preference> Preferences { get; set; }
    }
}
