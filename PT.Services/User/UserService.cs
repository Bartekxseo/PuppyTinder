using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNet.OData.Query;
using PT.DataAccess;
using PT.Domain.Entities;
using PT.Services.Administration;
using PT.Services.User.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;

namespace PT.Services.User
{
    public class UserService : IUserService
    {
        private readonly PTDbContext ptDbContext;
        readonly IMapper mapper;
        private readonly AdministrationService administrationService;
        public UserService(PTDbContext ptDbContext, IMapper mapper, AdministrationService administrationService)
        {
            this.ptDbContext = ptDbContext;
            this.mapper = mapper;
            this.administrationService = administrationService;
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
            return animalViewModel;
        }

        public List<AnimalViewModel> getAnimals(ODataQueryOptions<Animal> options)
        {
            return options.ApplyTo(ptDbContext.Set<Animal>().AsNoTracking())
                .ProjectTo<AnimalViewModel>(mapper.ConfigurationProvider).ToList();
        }

        public void likeAnimal(int animalId,string token)
        {
            var user = administrationService.getUser(token);
            var relation = new AnimalUserRelation
            {
                AnimalId = animalId,
                PreferenceId = (int)user.PreferencesId,
                RelationType = Domain.Entities.Enums.RelationTypeEnum.Like
            };

            ptDbContext.Set<AnimalUserRelation>().AddOrUpdate(relation);
        }

        public void dislikeAnimal(int animalId, string token)
        {
            var user = administrationService.getUser(token);
            var relation = new AnimalUserRelation
            {
                AnimalId = animalId,
                PreferenceId = (int)user.PreferencesId,
                RelationType = Domain.Entities.Enums.RelationTypeEnum.Dislike
            };

            ptDbContext.Set<AnimalUserRelation>().AddOrUpdate(relation);
        }

        public List<AnimalViewModel> getLikedAnimals(string token)
        {
            var user = administrationService.getUser(token);
            return ptDbContext.Set<AnimalUserRelation>()
                .Where(x => x.PreferenceId == user.PreferencesId && 
                (x.RelationType == Domain.Entities.Enums.RelationTypeEnum.Like || x.RelationType == Domain.Entities.Enums.RelationTypeEnum.Accepted))
                .Select(x => x.Animal).ProjectTo<AnimalViewModel>(mapper.ConfigurationProvider).ToList();
        }
    }
}
