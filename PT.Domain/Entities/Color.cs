using PT.Domain.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace PT.Domain.Entities
{
    public class Color : EnumEntity
    {
        public virtual ICollection<Preference> Preferences { get; set; }
    }
}
