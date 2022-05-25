using AutoMapper;
using PT.Domain.Entities;
using PT.Services.Administration.Model;
using PT.Services.Enums.Model;
using System;
using System.Linq;
using System.Text;

namespace PT.Services
{
    public class AutomapperProfile : Profile
    {
        public AutomapperProfile()
        {
            CreateMap<Color, ColorViewModel>()
                .ForMember(d => d.Color, s => s.MapFrom(x => x.Value));
            CreateMap<ColorViewModel, Color>()
                .ForMember(d => d.Value, s => s.MapFrom(x => x.Color));

            CreateMap<Character, CharacterViewModel>()
                .ForMember(d => d.Character, s => s.MapFrom(x => x.Value));
            CreateMap<CharacterViewModel, Character>()
                .ForMember(d => d.Value, s => s.MapFrom(x => x.Character));

            CreateMap<PuppySize, SizeViewModel>()
                .ForMember(d => d.Size, s => s.MapFrom(x => x.Value));
            CreateMap<SizeViewModel, PuppySize>()
                .ForMember(d => d.Value, s => s.MapFrom(x => x.Size));

            CreateMap<AnimalKind, AnimalKindViewModel>()
                .ForMember(d => d.AnimalKind, s => s.MapFrom(x => x.Value));
            CreateMap<AnimalKindViewModel, AnimalKind>()
                .ForMember(d => d.Value, s => s.MapFrom(x => x.AnimalKind));

            CreateMap<SpecificAnimalKind, SpecificAnimalKindViewModel>()
                .ForMember(d => d.SpecificAnimalKind, s => s.MapFrom(x => x.Kind))
                .ForMember(d => d.AnimalKind, s => s.MapFrom(x => x.AnimalKind));
            CreateMap<SpecificAnimalKindViewModel, SpecificAnimalKind>()
                .ForMember(d => d.Kind, s => s.MapFrom(x => x.SpecificAnimalKind))
                .ForMember(d => d.AnimalKindId, s => s.MapFrom(x => x.AnimalKind.Id));

            CreateMap<User, UserViewModel>()
                .ForMember(d=>d.Password,s=>s.MapFrom(x=> Encoding.UTF8.GetString(Convert.FromBase64String(x.PasswordHash))));
        }
    }
}
