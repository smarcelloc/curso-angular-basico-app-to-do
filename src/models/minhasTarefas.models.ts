export class MinhasTarefas {
    public id: Number
    public nome: String
    public concluida: Boolean

    //private static comprimento = 0
    /**
     * Construtor da classe pública
     */
    constructor(id: Number, nome: String, conluida: Boolean = false) {
        this.id = id
        this.nome = nome
        this.concluida = conluida
        //MinhasTarefas.comprimento++
    }

    ///////////////////////////////////////////////////
    // Neste caso porque é PRIVATE
    // public get getComprimento(): number {
    //     return MinhasTarefas.comprimento
    // }
}