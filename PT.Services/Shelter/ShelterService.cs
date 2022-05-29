using AutoMapper;
using AutoMapper.QueryableExtensions;
using PT.DataAccess;
using PT.Domain.Entities;
using PT.Domain.FileStorage;
using PT.Services.Administration;
using PT.Services.Shelter.Model;
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
        private readonly IFileStorageService fileStorageService;
        public ShelterService(PTDbContext ptDbContext, IAdministrationService administrationService, IMapper mapper, IFileStorageService fileStorageService)
        {
            this.ptDbContext = ptDbContext;
            this.administrationService = administrationService;
            this.mapper = mapper;
            this.fileStorageService = fileStorageService;
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

        public void uploadPhoto(Stream photo, ImageViewModel image)
        {
            var safeFileName = fileStorageService.GetSafeFileName(image.FileName);
            var storageFilePath = Path.Combine(image.PuppyName, safeFileName);
            fileStorageService.SaveFile(photo, storageFilePath);
            
            var dbPhoto = new Photo
            {
                FileName = safeFileName,
                Path = storageFilePath,
                AnimalId = image.AnimalId

            };
            ptDbContext.Set<Photo>().Add(dbPhoto);
            ptDbContext.Set<Animal>().SingleOrDefault(x => x.Id == image.AnimalId).Photos.Add(dbPhoto);
            ptDbContext.SaveChanges();
            
        }

        public void deletePhoto(int photoId)
        {
            var photo = ptDbContext.Set<Photo>().SingleOrDefault(x => x.Id == photoId);
            ptDbContext.Set<Animal>().SingleOrDefault(x => x.Id == photo.AnimalId).Photos.Remove(photo);
            ptDbContext.Set<Photo>().Remove(photo);
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
