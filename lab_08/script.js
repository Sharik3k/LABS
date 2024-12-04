function toggleFolder(folderId) {
    let folderContent = document.getElementById(folderId);
    let icon = document.getElementById('icon-' + folderId);

    if (folderContent.style.display === "none" || folderContent.style.display === "") {
        folderContent.style.display = "block";
        icon.src = "images/open.png"; 
    } else {
        folderContent.style.display = "none";
        icon.src = "images/folder.png"; 
    }
}