using PT.Services.Enums.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace PT.Services.User.Model
{
    public class PreferenceViewModel
    {
        public int? Id { get; set; }

        public string Location { get; set; }

        public float? YardSize { get; set; }

        public float? LivingSpaceSize { get; set; }

        public bool OtherAnimals { get; set; }

        public bool CatProtection { get; set; }

        public string Description { get; set; }

        public List<SpecificAnimalKindViewModel> SpecificAnimalKinds { get; set; }

        public List<ColorViewModel> Colors { get; set; }

        public List<CharacterViewModel> Characters { get; set; }

        public List<SizeViewModel> PuppySizes { get; set; }

    }
}
