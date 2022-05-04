using PT.Domain.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace PT.Domain.Entities
{
    public class Preference : Entity<int>
    {
        public string Location { get; set; }
        public float? YardSize { get; set; }
        public float? LivingSpaceSize { get; set; }
        public bool OtherAnimals { get; set; }
        public bool CatProtection { get; set; }
        public string Description { get; set; }

        public virtual ICollection<SpecificAnimalKind> SpecificAnimalKinds { get; set; }
        public virtual ICollection<Color> Colors { get; set; }
        public virtual ICollection<Character> Characters { get; set; }
        public virtual ICollection<PuppySize> PuppySizes { get; set; }
    }
}
