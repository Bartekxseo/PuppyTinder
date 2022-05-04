using PT.Domain.Entities.Abstract;
using PT.Domain.Entities.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace PT.Domain.Entities
{
    public class AnimalUserRelation : Entity<int>
    {
        public RelationTypeEnum RelationType { get; set; }
        public int AnimalId { get; set; }
        public virtual Animal Animal { get; set; }

        public int PreferenceId { get; set; }
        public virtual Preference Preference { get; set; }
    }
}
