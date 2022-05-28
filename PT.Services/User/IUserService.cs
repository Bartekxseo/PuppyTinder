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
    }
}
