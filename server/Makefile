CXX := g++
CXXFLAGS := -Wall -Wextra -g -std=c++17

BINPATH := bin
OBJPATH := $(BINPATH)/objs
SRCPATH := *.cpp
INCPATH := -Iinclude/

SOURCES := $(wildcard $(SRCPATH))
OBJECTS := $(patsubst %.cpp, $(OBJPATH)/%.o, $(notdir $(SOURCES)))

$(EXECUTABLE): $(OBJECTS)
	@mkdir -p $(BINPATH)
	$(CXX) $(CXXFLAGS) $(INCPATH) $^ -o $@

$(OBJPATH)/%.o: %.cpp
	@mkdir -p $(OBJPATH)
	$(CXX) $(CXXFLAGS) $(INCPATH) -c $< -o $@

clean:
	@rm -rf $(BINPATH)

.PHONY: clean