using PT.Services.Shelter.Model;
using PT.Services.User.Model;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace PT.Services.Shelter
{
    public interface IShelterService
    {
        List<AnimalViewModel> getOwnAnimals(string token);
        void addOrUpdateAnimal(AnimalViewModel animalViewModel);
        void deleteAnimal(int animalId);
        void uploadPhoto(Stream photo, ImageViewModel image);
        void deletePhoto(int photoId);
        ShelterViewModel updateShelter(ShelterViewModel shelterViewModel);
    }
}
