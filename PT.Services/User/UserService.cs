using AutoMapper;
using AutoMapper.QueryableExtensions;
using PT.DataAccess;
using PT.Domain.Entities;
using PT.Services.User.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PT.Services.User
{
    public class UserService : IUserService
    {
        private readonly PTDbContext ptDbContext;
        readonly IMapper mapper;
        public UserService(PTDbContext ptDbContext, IMapper mapper)
        {
            this.ptDbContext = ptDbContext;
            this.mapper = mapper;
        }

        public ShelterViewModel getShelter(int shelterId)
        {
            var shelter = ptDbContext.Set<Shelter>().Where(x => x.Id == shelterId).ProjectTo<ShelterViewModel>(mapper.ConfigurationProvider).FirstOrDefault();
            return shelter;
        }

        public AnimalViewModel getAnimal(int animalId)
        {
            var animal = ptDbContext.Set<Animal>().Where(x => x.Id == animalId).FirstOrDefault();
            var animalViewModel = new AnimalViewModel();
            mapper.Map(animal, animalViewModel);
            mapper.Map(animal.Characters, animalViewModel.Characters);
            mapper.Map(animal.Color, animalViewModel.Color);
            mapper.Map(animal.AnimalKind, animalViewModel.AnimalKind);
            mapper.Map(animal.PuppySize, animalViewModel.Size);
            return animalViewModel;
        }
    }
}
