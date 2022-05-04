using System;
using System.Collections.Generic;
using System.Text;

namespace PT.Domain.Entities.Abstract
{
    public abstract class Entity<TKey>
    {
        public TKey Id { get; set; }
    }
}
