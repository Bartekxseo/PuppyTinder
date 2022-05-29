using PT.Domain.FileStorage;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace PT.Services.FileStorage
{
    public class FileService : IFileStorageService
    {
        readonly IFileStorageConfiguration fileStorageConfiguration;
        public FileService(IFileStorageConfiguration fileStorageConfiguration)
        {
            this.fileStorageConfiguration = fileStorageConfiguration;
        }
        public string GetFullFilePath(string relativeFilePath)
        {
            var rootPath = fileStorageConfiguration.FileStorageRootPath;
            return Path.Combine(rootPath, relativeFilePath);
        }

        public string GetSafeFileName(string fileName)
        {
            var fileExtention = Path.GetExtension(fileName);
            var safeFileName = Guid.NewGuid().ToString();
            return $"{safeFileName}{fileExtention}";
        }

        public void RemoveFile(string filePath)
        {
            var fullFilePath = GetFullFilePath(filePath);
            if(File.Exists(fullFilePath))
            {
                File.Delete(fullFilePath);
            }
        }

        public void SaveFile(Stream fileStream, string destinationFilePath)
        {
            var fullFilePath = GetFullFilePath(destinationFilePath);
            var directoryPath = Path.GetDirectoryName(fullFilePath);
            if(!Directory.Exists(directoryPath))
            {
                Directory.CreateDirectory(directoryPath);
            }
            using (var outputStream = File.Create(fullFilePath))
            using (fileStream)
            {
                fileStream.CopyTo(outputStream);
            }
        }
    }
}
