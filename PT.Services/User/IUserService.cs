using Microsoft.AspNet.OData.Query;
using PT.Domain.Entities;
using PT.Services.User.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace PT.Services.User
{
    public interface IUserService
    {
        ShelterViewModel getShelter(int shelterId);
        AnimalViewModel getAnimal(int animalId);
        List<AnimalViewModel> getAnimals(ODataQueryOptions<Animal> options);
        void likeAnimal(int animalId, string token);
        void dislikeAnimal(int animalId, string token);
        List<AnimalViewModel> getLikedAnimals(string token);
        PreferenceViewModel addOrUpdatePreferences(PreferenceViewModel preferenceViewModel);
    }
}
