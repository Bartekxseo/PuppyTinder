using System;
using System.Collections.Generic;
using System.Text;

namespace PT.Services.Shelter.Model
{
    public class ImageViewModel
    {
        public int? Id { get; set; }

        public byte[] Array { get; set; }

        public string FileName { get; set; }

        public string PuppyName { get; set; }

        public int UserId { get; set; }

        public int AnimalId { get; set; }
    }
}
