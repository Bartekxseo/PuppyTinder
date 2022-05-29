using PT.Domain.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace PT.Domain.Entities
{
    public class Animal : Entity<int>
    {
        public int SpecificAnimalKindId { get; set; }
        public virtual SpecificAnimalKind SpecificAnimalKind { get; set; }

        public string Description { get; set; }
        public string Timeline { get; set; }

        public int ColorId { get; set; }
        public virtual Color Color { get; set; }

        public int PuppySizeId { get; set; }
        public virtual PuppySize PuppySize { get; set; }

        public virtual ICollection<Character> Characters { get; set; }

        public virtual ICollection<Photo> Photos { get; set; }

        public int ShelterId { get; set; }
        public virtual Shelter Shelter { get; set; }

        public int Age { get; set; }
        public float? MinYard { get; set; }
        public float? MinLivingSpace { get; set; }
        public bool Castrated { get; set; }
        public bool LikesKids { get; set; }
        public bool LikesAnimals { get; set; }
        public bool IsMale { get; set; }

        public bool? CustomBoolean1 { get; set; }
        public int? CustomInteger1 { get; set; }
        public string? CustomCharacter1 { get; set; }

    }
}
