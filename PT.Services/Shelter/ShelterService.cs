using AutoMapper;
using AutoMapper.QueryableExtensions;
using PT.DataAccess;
using PT.Domain.Entities;
using PT.Services.Administration;
using PT.Services.User.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.IO;
using System.Linq;
using System.Text;

namespace PT.Services.Shelter
{
    public class ShelterService : IShelterService
    {
        private readonly PTDbContext ptDbContext;
        private readonly IAdministrationService administrationService;
        private readonly IMapper mapper;
        public ShelterService(PTDbContext ptDbContext, IAdministrationService administrationService, IMapper mapper)
        {
            this.ptDbContext = ptDbContext;
            this.administrationService = administrationService;
        }

        public List<AnimalViewModel> getOwnAnimals(string token)
        {
            var user = administrationService.getUser(token);
            var animals = ptDbContext.Set<Animal>().Where(x => x.ShelterId == user.ShelterId).ProjectTo<AnimalViewModel>(mapper.ConfigurationProvider).ToList();
            return animals;
        }
        public void addOrUpdateAnimal(AnimalViewModel animalViewModel)
        {
            var animal = animalViewModel.Id.HasValue && animalViewModel.Id.Value != 0 ? ptDbContext.Set<Animal>().SingleOrDefault(x => x.Id == animalViewModel.Id) : new Animal();
            mapper.Map(animalViewModel, animal);
            ptDbContext.Set<Animal>().AddOrUpdate(animal);
            ptDbContext.SaveChanges();
        }

        public void deleteAnimal(int animalId)
        {
            var animal = ptDbContext.Set<Animal>().SingleOrDefault(x => x.Id == animalId);
            ptDbContext.Set<Animal>().Remove(animal);
            ptDbContext.SaveChanges();
        }

        public void uploadPhoto(FileStream photo)
        {
            throw new NotImplementedException();
        }

        public void deletePhoto(int photoId)
        {
            throw new NotImplementedException();
        }

        public ShelterViewModel updateShelter(ShelterViewModel shelterViewModel)
        {
            var shelter = shelterViewModel.Id.HasValue && shelterViewModel.Id.Value != 0 ? ptDbContext.Set<Domain.Entities.Shelter>().SingleOrDefault(x => x.Id == shelterViewModel.Id) : new Domain.Entities.Shelter();
            mapper.Map(shelterViewModel, shelter);
            ptDbContext.Set<Domain.Entities.Shelter>().AddOrUpdate(shelter);
            ptDbContext.SaveChanges();
            return mapper.Map<ShelterViewModel>(shelter);
        }
    }
}
