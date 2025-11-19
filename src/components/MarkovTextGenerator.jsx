import React, { useState, useMemo } from 'react';
import { Sparkles, PlayCircle, RefreshCw, Book, TrendingUp, Info } from 'lucide-react';
import './MarkovTextGenerator.css';

const MarkovTextGenerator = () => {
const [texto, setTexto] = useState("o gato dorme o gato corre o gato mia o cão late o cão dorme o gato olha o cão late o cão olha");
const [tamanho, setTamanho] = useState(10);
const [palavraInicial, setPalavraInicial] = useState("");
const [textoGerado, setTextoGerado] = useState("");
const [isGenerating, setIsGenerating] = useState(false);
const [showTransitions, setShowTransitions] = useState(false);
const [error, setError] = useState("");
const [animatedWords, setAnimatedWords] = useState([]);


const { transicoes, palavrasDisponiveis } = useMemo(() => {
    const palavras = texto.toLowerCase().trim().split(/\s+/);
    const novasTransicoes = {};

    for (let i = 0; i < palavras.length - 1; i++) {
    const atual = palavras[i];
    const proxima = palavras[i + 1];

    if (!novasTransicoes[atual]) novasTransicoes[atual] = [];
    novasTransicoes[atual].push(proxima);
    }

    return {
    transicoes: novasTransicoes,
    palavrasDisponiveis: [...new Set(palavras)].sort(),
    };
}, [texto]);

const calcularProbabilidades = (palavra) => {
    if (!transicoes[palavra]) return [];

    const contagem = {};
    transicoes[palavra].forEach((p) => {
    contagem[p] = (contagem[p] || 0) + 1;
    });

    const total = transicoes[palavra].length;

    return Object.entries(contagem)
    .map(([pal, count]) => ({
        palavra: pal,
        probabilidade: ((count / total) * 100).toFixed(1),
    }))
    .sort((a, b) => b.probabilidade - a.probabilidade);
};

const gerarTexto = async () => {
    setError("");
    setTextoGerado("");
    setAnimatedWords([]);

    if (!palavraInicial.trim()) {
    setError("Por favor, digite uma palavra inicial!");
    return;
    }

    const palavra = palavraInicial.toLowerCase().trim();

    if (!transicoes[palavra]) {
    setError(`A palavra "${palavra}" não foi encontrada no texto base.`);
    return;
    }

    setIsGenerating(true);

    let palavraAtual = palavra;
    const resultado = [palavraAtual];

    for (let i = 0; i < tamanho - 1; i++) {
    await new Promise((resolve) => setTimeout(resolve, 150));

    if (transicoes[palavraAtual] && transicoes[palavraAtual].length > 0) {
        const proxima =
        transicoes[palavraAtual][
            Math.floor(Math.random() * transicoes[palavraAtual].length)
        ];
        resultado.push(proxima);
        setAnimatedWords([...resultado]);
        palavraAtual = proxima;
    } else {
        break;
    }
    }

    setTextoGerado(resultado.join(" "));
    setIsGenerating(false);
};

const probabilidades =
    palavraInicial.toLowerCase().trim() in transicoes
    ? calcularProbabilidades(palavraInicial.toLowerCase().trim())
    : [];

return (
    <div className="markov-container">
    <div className="markov-wrapper">
        {/* Header */}
        <div className="markov-header">
        <div className="header-title">
            <Sparkles className="icon-sparkle icon-pulse" />
            <h1 className="main-title">Gerador de Texto</h1>
            <Sparkles className="icon-sparkle icon-pulse" />
        </div>
        <p className="subtitle">Cadeia de Markov • Universidade Salvador</p>
        <p className="group-info">
            Grupo nº 6 • Prof.ª Ivana Barreto Matos
        </p>
        </div>

        <div className="markov-grid">
          {/* Painel de Configuração */}
        <div className="panel config-panel">
            <div className="panel-header">
            <Book className="panel-icon" />
            <h2 className="panel-title">Configuração</h2>
            </div>

            <div className="config-content">
            <div className="form-group">
                <label className="form-label">Texto Base</label>
                <textarea
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                className="form-textarea"
                placeholder="Digite o texto base..."
                />
            </div>

            <div className="form-group">
                <label className="form-label">
                Quantidade de Palavras: {tamanho}
                </label>
                <input
                type="range"
                min="3"
                max="30"
                value={tamanho}
                onChange={(e) => setTamanho(Number(e.target.value))}
                className="form-range"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Palavra Inicial</label>
                <input
                type="text"
                value={palavraInicial}
                onChange={(e) => setPalavraInicial(e.target.value)}
                className="form-input"
                placeholder="Digite a palavra inicial..."
                onKeyPress={(e) => e.key === "Enter" && gerarTexto()}
                />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button
                onClick={gerarTexto}
                disabled={isGenerating}
                className="btn-generate"
            >
                {isGenerating ? (
                <>
                    <RefreshCw className="btn-icon icon-spin" />
                    Gerando...
                </>
                ) : (
                <>
                    <PlayCircle className="btn-icon" />
                    Gerar Texto
                </>
                )}
            </button>
            </div>

            {/* Palavras Disponíveis */}
            <div className="available-words">
            <button
                onClick={() => setShowTransitions(!showTransitions)}
                className="toggle-words-btn"
            >
                <Info className="info-icon" />
                <span>
                Palavras Disponíveis ({palavrasDisponiveis.length})
                </span>
            </button>

            {showTransitions && (
                <div className="words-list">
                {palavrasDisponiveis.map((palavra, idx) => (
                    <span
                    key={idx}
                    onClick={() => setPalavraInicial(palavra)}
                    className="word-tag"
                    >
                    {palavra}
                    </span>
                ))}
                </div>
            )}
            </div>
        </div>

          {/* Painel de Resultado */}
        <div className="results-column">
            {/* Texto Gerado */}
            <div className="panel result-panel">
            <div className="panel-header">
                <Sparkles className="panel-icon icon-yellow" />
                <h2 className="panel-title">Texto Gerado</h2>
            </div>

            {textoGerado ? (
                <div className="result-content">
                <div className="generated-text-box">
                    <p className="generated-text">
                    {isGenerating ? (
                        animatedWords.map((palavra, idx) => (
                        <span
                            key={idx}
                            className="animated-word"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            {palavra}
                        </span>
                        ))
                    ) : (
                        textoGerado
                    )}
                    </p>
                </div>

                <div className="word-count">
                    <span>Total de palavras:</span>
                    <span className="count-number">
                    {textoGerado.split(" ").length}
                    </span>
                </div>
                </div>
            ) : (
                <div className="empty-result">
                <p>Configure os parâmetros e clique em "Gerar Texto"</p>
                </div>
            )}
            </div>

            {/* Probabilidades */}
            {probabilidades.length > 0 && (
            <div className="panel probability-panel">
                <div className="panel-header">
                <TrendingUp className="panel-icon icon-green" />
                <h2 className="panel-title">Probabilidades</h2>
                </div>

                <div className="probability-list">
                {probabilidades.map((item, idx) => (
                    <div key={idx} className="probability-item">
                    <div className="probability-info">
                        <span className="probability-word">{item.palavra}</span>
                        <span className="probability-value">
                        {item.probabilidade}%
                        </span>
                    </div>
                    <div className="probability-bar-container">
                        <div
                        className="probability-bar"
                        style={{ width: `${item.probabilidade}%` }}
                        />
                    </div>
                    </div>
                ))}
                </div>
            </div>
            )}
        </div>
        </div>

        {/* Footer */}
        <div className="markov-footer">
        <p>Projeto A3 • Estruturas Matemáticas • 2025.2</p>
        <p className="footer-names">
            Gabriel, Guilherme, Gustavo, Janaina, Silas, Pedro Henrique
        </p>
        <p>
            <a href='https://github.com/Pedrohxxz/MarkovGenerator' target='_blank' rel="noopener noreferrer">Link do repositório do projeto!</a>
        </p>
        </div>
    </div>
    </div>
);
};

export default MarkovTextGenerator;
