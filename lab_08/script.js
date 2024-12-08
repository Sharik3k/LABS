function toggleFolder(folderId) {
    let folderContent = document.getElementById(folderId);
    let icon = document.getElementById('icon-' + folderId);

    if (folderContent.style.display === "none" || folderContent.style.display === "") {
        folderContent.style.display = "block";
        if (icon) {
            icon.src = "image/open.png"; 
        }
    } else {
        folderContent.style.display = "none";
        if (icon) {
            icon.src = "image/folder.png"; 
        }
    }
}
