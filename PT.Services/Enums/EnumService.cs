using AutoMapper;
using PT.DataAccess;
using PT.Domain.Entities;
using PT.Services.Enums.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PT.Services.Enums
{
    public class EnumService : IEnumService
    {
        private readonly PTDbContext ptDbContext;
        readonly IMapper mapper;
        public EnumService(PTDbContext ptDbContext,IMapper mapper)
        {
            this.ptDbContext = ptDbContext;
            this.mapper = mapper;
        }

        public List<ColorViewModel> getColors()
        {
            var ColorList = new List<ColorViewModel>();
            var Colors = ptDbContext.Set<Color>().AsNoTracking().ToList();
            mapper.Map(Colors, ColorList);
            return ColorList;
        }

        public List<CharacterViewModel> getCharacters()
        {
            var CharactersList = new List<CharacterViewModel>();
            var Characters = ptDbContext.Set<Character>().AsNoTracking().ToList();
            mapper.Map(Characters, CharactersList);
            return CharactersList;
        }

        public List<SizeViewModel> getSizes()
        {
            var SizesList = new List<SizeViewModel>();
            var Sizes = ptDbContext.Set<PuppySize>().AsNoTracking().ToList();
            mapper.Map(Sizes, SizesList);
            return SizesList;
        }
        public List<AnimalKindViewModel> getAnimalKinds()
        {
            var AnimalKindsList = new List<AnimalKindViewModel>();
            var AnimalKinds = ptDbContext.Set<AnimalKind>().AsNoTracking().ToList();
            mapper.Map(AnimalKinds, AnimalKindsList);
            return AnimalKindsList;
        }

        public List<SpecificAnimalKindViewModel> getSpecificAnimalKinds()
        {
            var SpecificAnimalKindsList = new List<SpecificAnimalKindViewModel>();
            var SpecificAnimalKinds = ptDbContext.Set<SpecificAnimalKind>().AsNoTracking().ToList();
            mapper.Map(SpecificAnimalKinds, SpecificAnimalKindsList);
            return SpecificAnimalKindsList;
        }
    }
}
