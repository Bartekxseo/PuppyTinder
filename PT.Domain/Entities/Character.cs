using PT.Domain.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace PT.Domain.Entities
{
    public class Character : EnumEntity
    {
        public virtual ICollection<Animal> Animals { get; set; }

        public virtual ICollection<Preference> Preferences { get; set; }
    }
}
