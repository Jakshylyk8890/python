class Car:
    """
    This Docstring for describing the class
    """
    def __init__(self, engine, tires):
        self.engine = engine
        self.tires = tires
civic = Car('4 cilinder' , ['font-driver', 'font-passenger', 'rear-driver'])
print(civic.engine)
print(civic.tires)