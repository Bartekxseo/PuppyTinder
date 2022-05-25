using PT.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace PT.Services.Enums.Model
{
    public class SpecificAnimalKindViewModel
    {
        public int Id { get; set; }
        public string SpecificAnimalKind { get; set; }
        public AnimalKind AnimalKind { get; set; }
    }
}
