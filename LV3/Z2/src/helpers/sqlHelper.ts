import { Person } from "../reducers/MainReducer";

export const readAll = (db: any) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx: any) => {
            tx.executeSql('SELECT * FROM InspiringPeople', [], (tx: any, results: any) => {
                const res = [];
                for (let i = 0; i < results.rows.length; i++) {
                    const formatedQuotes = results.rows.item(i).quotes.split(";");
                    res.push({ ...results.rows.item(i), quotes: formatedQuotes })
                }
                if (res.length) {
                    resolve(res)
                } else {
                    reject()
                }
            })
        })
    })
}

export const addNew = (db: any, imageUri: string, data: Person, formatedQuotes: string) => {
    db.transaction((tx: any) => {
        tx.executeSql(
            'INSERT INTO InspiringPeople (birthYear,deathYear,description,firstName,lastName,quotes,uri) VALUES (?,?,?,?,?,?,?,?)',
            [data.birthYear, data.deathYear, data.description, data.firstName, data.lastName, formatedQuotes, imageUri]
        )
    })
}

export const deleteByID = (db: any, id: number) => {
    db.transaction((tx: any) => {
        tx.executeSql('DELETE FROM InspiringPeople WHERE id=?', [id])
    })
}

export const updateByID = (db: any, id: number, data: Person, formatedQuotes: string) => {
    db.transaction((tx: any) => {
        tx.executeSql('UPDATE InspiringPeople SET firstName = ? , lastName = ? , description = ? , birthYear = ? , deathYear = ? , quotes = ? , uri = ? WHERE id=?',
            [data.firstName, data.lastName, data.description, data.birthYear, data.deathYear, formatedQuotes, data.uri, id])
    })
}