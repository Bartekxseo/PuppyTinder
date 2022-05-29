using PT.Domain.FileStorage;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Text;

namespace PT.Services.FileStorage
{
    public class FileStorageConfiguration : IFileStorageConfiguration
    {
        public string FileStorageRootPath {
            get
            {
                var rootPath = ConfigurationManager.AppSettings["FileStorageRootPath"];
                return rootPath;
            }
        }
    }
}
