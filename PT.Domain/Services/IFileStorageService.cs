using System.IO;

namespace PT.Domain.FileStorage
{
    public interface IFileStorageService
    {
        void SaveFile(Stream fileStream, string destinationFilePath);

        void RemoveFile(string filePath);

        string GetSafeFileName(string fileName);

        string GetFullFilePath(string relativeFilePath);

        byte[] GetFileContent(string relativeFilePath);
        byte[] GetFileContentAbsolutePath(string absoluteFilePath);
        void SaveFile(string content, string destinationFilePath);

        string GetFileJsonContent(string destinationFilePath);


        void AddOrUpdate<T>(T model);
    }
}
