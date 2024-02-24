backup_directory() {
    if [ -z "$1" ]; then
        echo "Usage: backup_directory [directory path]"
        return 1
    fi

    local dir_to_backup=$1
    local timestamp=$(date +%Y%m%d_%H%M%S)
    local backup_filename="backup_${dir_to_backup//\//_}_$timestamp.tar.gz"

    tar -czf $backup_filename $dir_to_backup
    echo "Backup of '$dir_to_backup' created as '$backup_filename'"
}
