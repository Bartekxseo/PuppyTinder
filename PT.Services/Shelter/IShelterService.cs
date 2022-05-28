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
        void uploadPhoto(FileStream photo);
        void deletePhoto(int photoId);
        ShelterViewModel updateShelter(ShelterViewModel shelterViewModel);
    }
}
