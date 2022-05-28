using PT.Services.Enums.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace PT.Services.User.Model
{
    public class AnimalViewModel
    {
        public int? Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public SpecificAnimalKindViewModel SpecificAnimalKind { get; set; }

        public List<CharacterViewModel> Characters { get; set; }

        public ColorViewModel Color { get; set; }

        public SizeViewModel PuppySize { get; set; }

        public bool IsMale { get; set; }

        public bool LikesKinds { get; set; }

        public bool LikesAnimals { get; set; }


    }
}
